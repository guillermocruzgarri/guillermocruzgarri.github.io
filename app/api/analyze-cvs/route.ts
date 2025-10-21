
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    // Read the CV files
    const baCvPath = path.join(process.cwd(), 'public', 'BA-CV-Guillermo-Cruz.pdf');
    const fdaCvPath = path.join(process.cwd(), 'public', 'FDA-CV-Guillermo-Cruz.pdf');
    
    // Read both files as base64
    const baCvBuffer = fs.readFileSync(baCvPath);
    const fdaCvBuffer = fs.readFileSync(fdaCvPath);
    
    const baCvBase64 = baCvBuffer.toString('base64');
    const fdaCvBase64 = fdaCvBuffer.toString('base64');
    
    const messages = [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Please analyze these two CV files for Guillermo Cruz and extract comprehensive information in JSON format. I need the following structure:\n\n{\n  \"personalInfo\": {\n    \"name\": \"Full Name\",\n    \"title\": \"Professional Title\",\n    \"email\": \"email@example.com\",\n    \"phone\": \"phone number\",\n    \"location\": \"city, country\",\n    \"linkedin\": \"linkedin profile\",\n    \"bio\": \"professional summary paragraph\"\n  },\n  \"skills\": {\n    \"businessAnalysis\": [\"skill1\", \"skill2\"],\n    \"financialAnalysis\": [\"skill1\", \"skill2\"],\n    \"technical\": [\"tool1\", \"tool2\"],\n    \"soft\": [\"skill1\", \"skill2\"]\n  },\n  \"experience\": [\n    {\n      \"company\": \"Company Name\",\n      \"position\": \"Job Title\",\n      \"period\": \"Start Date - End Date\",\n      \"description\": \"Role description and key achievements\",\n      \"type\": \"BA\" or \"FDA\"\n    }\n  ],\n  \"education\": [\n    {\n      \"institution\": \"Institution Name\",\n      \"degree\": \"Degree Name\",\n      \"period\": \"Start - End\",\n      \"details\": \"Additional details if any\"\n    }\n  ],\n  \"certifications\": [\"Certification 1\", \"Certification 2\"],\n  \"projects\": [\n    {\n      \"name\": \"Project Name\",\n      \"description\": \"Project description\",\n      \"technologies\": [\"tech1\", \"tech2\"],\n      \"type\": \"BA\" or \"FDA\"\n    }\n  ]\n}\n\nPlease provide detailed, accurate information that showcases both his Business Analyst and Financial Data Analyst expertise. Respond with clean JSON only."
          },
          {
            type: "file",
            file: {
              filename: "BA-CV Guillermo Cruz.pdf",
              file_data: `data:application/pdf;base64,${baCvBase64}`
            }
          },
          {
            type: "file",
            file: {
              filename: "FDA-CV Guillermo Cruz.pdf", 
              file_data: `data:application/pdf;base64,${fdaCvBase64}`
            }
          }
        ]
      }
    ];

    const response = await fetch('https://apps.abacus.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ABACUSAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        messages: messages,
        response_format: { type: "json_object" },
        max_tokens: 4000
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data?.choices?.[0]?.message?.content) {
      throw new Error('Invalid API response structure');
    }

    const extractedInfo = JSON.parse(data.choices[0].message.content);
    
    // Save the extracted information
    const outputPath = path.join(process.cwd(), 'extracted_cv_data.json');
    fs.writeFileSync(outputPath, JSON.stringify(extractedInfo, null, 2));
    
    return NextResponse.json({ 
      success: true, 
      data: extractedInfo 
    });

  } catch (error) {
    console.error('Error analyzing CVs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to analyze CVs: ' + (error as Error).message },
      { status: 500 }
    );
  }
}
