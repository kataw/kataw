# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default function f(){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 0,
                "start": 6,
                "end": 14
            },
            "declaration": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 0,
                    "start": 14,
                    "end": 23
                },
                "generatorToken": null,
                "name": {
                    "kind": 134299649,
                    "original": "f",
                    "text": "f",
                    "rawText": " f",
                    "flags": 96,
                    "start": 23,
                    "end": 25
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 25,
                    "end": 27
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 28,
                        "end": 28
                    },
                    "flags": 32,
                    "start": 27,
                    "end": 29
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 16,
                "start": 14,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": true,
    "source": "export default function f(){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

