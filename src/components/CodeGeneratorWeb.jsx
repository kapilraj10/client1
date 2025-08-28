import React, { useState } from 'react';

/**
 * Web-based Code Generator Component
 * Interactive React component for generating code templates
 */

const CodeGeneratorWeb = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [componentName, setComponentName] = useState('');
  const [options, setOptions] = useState({});
  const [generatedCode, setGeneratedCode] = useState('');
  const [showCode, setShowCode] = useState(false);

  const templates = {
    'react-component': {
      type: 'react',
      category: 'component',
      description: 'Generate a React component',
      options: ['functional', 'withState', 'withProps', 'withStyles', 'typescript']
    },
    'react-hook': {
      type: 'react',
      category: 'hook',
      description: 'Generate a custom React hook',
      options: ['withState', 'withEffect', 'typescript']
    },
    'react-context': {
      type: 'react',
      category: 'context',
      description: 'Generate React context provider',
      options: ['typescript']
    },
    'react-page': {
      type: 'react',
      category: 'page',
      description: 'Generate a page component',
      options: ['withLayout', 'withSEO', 'typescript']
    },
    'react-form': {
      type: 'react',
      category: 'form',
      description: 'Generate a form component',
      options: ['withValidation', 'typescript']
    }
  };

  // Simplified code generator functions
  const generateReactComponent = (name, opts = {}) => {
    const {
      functional = true,
      withState = false,
      withProps = false,
      withStyles = false,
      typescript = false
    } = opts;

    const imports = functional ? 
      `import React${withState ? ', { useState, useEffect }' : ''} from 'react';\n` :
      `import React, { Component } from 'react';\n`;
    
    const styleImport = withStyles ? `import './${name}.css';\n` : '';
    const propsType = withProps && typescript ? `interface ${name}Props {\n  // Define props here\n}\n\n` : '';
    const propsParam = withProps ? (typescript ? `props: ${name}Props` : 'props') : '';

    if (functional) {
      return `${imports}${styleImport}${typescript ? propsType : ''}
${typescript ? 'const' : 'function'} ${name}(${propsParam})${typescript ? ': React.FC' + (withProps ? `<${name}Props>` : '') : ''} ${typescript ? '=' : '{'} ${typescript ? '(' : ''}${typescript ? '{' : ''}
${withState ? '  const [state, setState] = useState({});\n' : ''}
${withState ? '  useEffect(() => {\n    // Component did mount logic\n  }, []);\n' : ''}
  return (
    <div className="${name.toLowerCase()}">
      <h1>Hello from ${name}!</h1>
${withProps ? '      {/* Use props here */}\n' : ''}
    </div>
  );
${typescript ? '}' : '}'}${typescript ? ')' : ''}

export default ${name};
`;
    } else {
      return `${imports}${styleImport}
class ${name} extends Component {
${withState ? '  constructor(props) {\n    super(props);\n    this.state = {};\n  }\n' : ''}
  render() {
    return (
      <div className="${name.toLowerCase()}">
        <h1>Hello from ${name}!</h1>
      </div>
    );
  }
}

export default ${name};
`;
    }
  };

  const generateCustomHook = (name, opts = {}) => {
    const { withState = true, withEffect = true, typescript = false } = opts;
    
    return `import { ${withState ? 'useState' : ''}${withState && withEffect ? ', ' : ''}${withEffect ? 'useEffect' : ''} } from 'react';

${typescript ? `interface Use${name}Return {
  // Define return type here
}

` : ''}export const use${name} = ()${typescript ? ': Use' + name + 'Return' : ''} => {
${withState ? '  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState(null);\n' : ''}
${withEffect ? '  useEffect(() => {\n    // Hook logic here\n  }, []);\n' : ''}
  return {
${withState ? '    data,\n    setData,\n    loading,\n    setLoading,\n    error,\n    setError,' : '    // Return values here'}
  };
};
`;
  };

  const generateContext = (name, opts = {}) => {
    const { typescript = false } = opts;
    
    return `import React, { createContext, useContext, useReducer${typescript ? ', ReactNode' : ''} } from 'react';

${typescript ? `interface ${name}State {
  // Define state type here
}

interface ${name}ContextType {
  state: ${name}State;
  dispatch: React.Dispatch<any>;
}

interface ${name}ProviderProps {
  children: ReactNode;
}

` : ''}const ${name}Context = createContext${typescript ? `<${name}ContextType | undefined>` : ''}(undefined);

const initialState${typescript ? `: ${name}State` : ''} = {
  // Initial state here
};

const ${name.toLowerCase()}Reducer = (state${typescript ? `: ${name}State` : ''}, action${typescript ? ': any' : ''}) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const ${name}Provider${typescript ? `: React.FC<${name}ProviderProps>` : ''} = ({ children }) => {
  const [state, dispatch] = useReducer(${name.toLowerCase()}Reducer, initialState);

  return (
    <${name}Context.Provider value={{ state, dispatch }}>
      {children}
    </${name}Context.Provider>
  );
};

export const use${name} = () => {
  const context = useContext(${name}Context);
  if (context === undefined) {
    throw new Error('use${name} must be used within a ${name}Provider');
  }
  return context;
};
`;
  };

  const generatePage = (name, opts = {}) => {
    const { withLayout = true, withSEO = true, typescript = false } = opts;
    
    return `import React from 'react';
${withLayout ? "import Layout from '../components/Layout';\n" : ''}${withSEO ? "import SEO from '../components/SEO';\n" : ''}
const ${name}Page${typescript ? ': React.FC' : ''} = () => {
  return (
    ${withLayout ? '<Layout>' : '<>'}
      ${withSEO ? `<SEO title="${name}" description="Description for ${name} page" />` : ''}
      <div className="${name.toLowerCase()}-page">
        <h1>${name} Page</h1>
        <p>Welcome to the ${name} page!</p>
      </div>
    ${withLayout ? '</Layout>' : '</>'}
  );
};

export default ${name}Page;
`;
  };

  const generateForm = (name, opts = {}) => {
    const { withValidation = true, typescript = false } = opts;
    
    return `import React, { useState } from 'react';

const ${name}Form${typescript ? ': React.FC' : ''} = () => {
  const [formData, setFormData] = useState({
    // Add form fields here
  });
  ${withValidation ? 'const [errors, setErrors] = useState({});' : ''}

  const handleChange = (e${typescript ? ': React.ChangeEvent<HTMLInputElement>' : ''}) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  ${withValidation ? `const validateForm = () => {
    const newErrors = {};
    // Add validation logic here
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };` : ''}

  const handleSubmit = (e${typescript ? ': React.FormEvent' : ''}) => {
    e.preventDefault();
    ${withValidation ? 'if (!validateForm()) return;' : ''}
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="${name.toLowerCase()}-form">
      <h2>${name} Form</h2>
      {/* Add form fields here */}
      <div className="form-group">
        <label htmlFor="example">Example Field</label>
        <input
          type="text"
          id="example"
          name="example"
          value={formData.example || ''}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ${name}Form;
`;
  };

  const generators = {
    'react-component': generateReactComponent,
    'react-hook': generateCustomHook,
    'react-context': generateContext,
    'react-page': generatePage,
    'react-form': generateForm
  };

  const handleGenerate = () => {
    if (!selectedTemplate || !componentName) {
      alert('Please select a template and enter a component name');
      return;
    }

    const generator = generators[selectedTemplate];
    if (generator) {
      const code = generator(componentName, options);
      setGeneratedCode(code);
      setShowCode(true);
    }
  };

  const handleOptionChange = (optionKey, value) => {
    setOptions(prev => ({
      ...prev,
      [optionKey]: value
    }));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    alert('Code copied to clipboard!');
  };

  const downloadFile = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedCode], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    const ext = options.typescript ? 
      (selectedTemplate.includes('hook') ? 'ts' : 'tsx') : 
      'jsx';
    element.download = `${componentName}.${ext}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        🚀 Code Generator
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Configuration Panel */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Template
            </label>
            <select
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Choose a template...</option>
              {Object.entries(templates).map(([key, template]) => (
                <option key={key} value={key}>
                  {template.description}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Component Name
            </label>
            <input
              type="text"
              value={componentName}
              onChange={(e) => setComponentName(e.target.value)}
              placeholder="e.g., MyComponent"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {selectedTemplate && templates[selectedTemplate] && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Options
              </label>
              <div className="space-y-2">
                {templates[selectedTemplate].options.map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={options[option] || false}
                      onChange={(e) => handleOptionChange(option, e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-600">
                      {option.replace(/([A-Z])/g, ' $1').toLowerCase()}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleGenerate}
            disabled={!selectedTemplate || !componentName}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Generate Code
          </button>
        </div>

        {/* Code Display Panel */}
        <div className="space-y-4">
          {showCode && (
            <>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Generated Code</h3>
                <div className="space-x-2">
                  <button
                    onClick={copyToClipboard}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                  >
                    Copy
                  </button>
                  <button
                    onClick={downloadFile}
                    className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                  >
                    Download
                  </button>
                </div>
              </div>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto max-h-96 text-sm">
                <code>{generatedCode}</code>
              </pre>
            </>
          )}
        </div>
      </div>

      {/* Template Gallery */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(templates).map(([key, template]) => (
            <div
              key={key}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedTemplate(key)}
            >
              <h3 className="font-medium text-gray-900 mb-2">{template.description}</h3>
              <p className="text-sm text-gray-600">
                Options: {template.options.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeGeneratorWeb;
