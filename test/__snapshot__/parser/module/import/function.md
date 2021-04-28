# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
function f(){import {x} from "y";}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 10,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 263,
                            "importKeyword": {
                                "kind": 37814364,
                                "flags": 0,
                                "start": 13,
                                "end": 19
                            },
                            "fromClause": {
                                "kind": 201392131,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 28,
                                "end": 32
                            },
                            "moduleSpecifier": null,
                            "importClause": {
                                "kind": 262,
                                "defaultBinding": null,
                                "nameSpaceImport": null,
                                "namedImports": {
                                    "kind": 267,
                                    "importsList": {
                                        "kind": 265,
                                        "specifiers": [
                                            {
                                                "kind": 264,
                                                "moduleExportName": null,
                                                "name": null,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 512,
                                                    "start": 21,
                                                    "end": 22
                                                },
                                                "flags": 128,
                                                "start": 21,
                                                "end": 22
                                            }
                                        ],
                                        "flags": 0,
                                        "start": 21,
                                        "end": 22
                                    },
                                    "flags": 128,
                                    "start": 19,
                                    "end": 23
                                },
                                "flags": 128,
                                "start": 19,
                                "end": 23
                            },
                            "flags": 128,
                            "start": 19,
                            "end": 33
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 13,
                    "end": 33
                },
                "flags": 256,
                "start": 12,
                "end": 34
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": true,
    "text": "function f(){import {x} from \"y\";}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The `import` keyword can only be used with the module goal - start: 32, end: 33

```

