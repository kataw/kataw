# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default function* f(){}
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
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 768,
                "start": 6,
                "end": 14
            },
            "declaration": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 768,
                    "start": 14,
                    "end": 23
                },
                "generatorToken": {
                    "kind": 67143222,
                    "flags": 768,
                    "start": 23,
                    "end": 24
                },
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 768,
                    "start": 24,
                    "end": 26
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 26,
                    "end": 28
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 29,
                        "end": 29
                    },
                    "flags": 256,
                    "start": 28,
                    "end": 30
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 2176,
                "start": 14,
                "end": 30
            },
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": true,
    "text": "export default function* f(){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

