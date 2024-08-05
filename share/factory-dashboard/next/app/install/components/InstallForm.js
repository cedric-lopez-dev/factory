'use client'

import { execCommand } from '@/app/services/factoryService';
import React, { useState } from 'react';

const InstallForm = ({ templates }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const selectedTemplate = e.target.elements['template-select'].value;
        const appName = e.target.elements['app-name'].value;
        const domainName = e.target.elements['domain-name'].value;
        execCommand(`factory init ${selectedTemplate} ${appName} ${domainName} --nossl --api`).then((res) => console.log(res))
    }
    return (
        <div>

            <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="template-select">Choose a template :</label>
                </div>
                <div>

                    <select
                        id="template-select"
                    >
                        <option value="" disabled>Select a template</option>
                        {templates.map((template, i) => (
                            <option key={i} value={template}>
                                {template}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="app-name">Choose a name :</label>

                </div>
                <div>
                    <input id='app-name' />
                </div>
                <div>
                    <label htmlFor="domain-name">Enter the domain name :</label>

                </div>
                <div>
                    <input id='domain-name' />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Install</button>
            </form>
        </div>
    );
};

export default InstallForm;