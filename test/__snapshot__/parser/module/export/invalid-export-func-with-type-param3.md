# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
export default function <,>() {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 80,
                "start": 0,
                "end": 14
            },
            "declaration": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 14,
                    "end": 23
                },
                "generatorToken": null,
                "name": null,
                "typeParameters": {
                    "kind": 307,
                    "declarations": {
                        "kind": 337,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 25,
                        "end": 25
                    },
                    "flags": 2097152,
                    "start": 23,
                    "end": 25
                },
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 25,
                    "end": 25
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 25,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 25,
                    "end": 25
                },
                "returnType": null,
                "flags": 16,
                "start": 14,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 26,
                    "end": 26
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "start": 26,
                    "end": 27
                },
                "right": {
                    "kind": 271,
                    "arrowToken": null,
                    "typeParameters": null,
                    "parameters": [],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 31,
                            "end": 31
                        },
                        "flags": 32,
                        "start": 29,
                        "end": 32
                    },
                    "flags": 32,
                    "start": 27,
                    "end": 32
                },
                "flags": 32,
                "start": 26,
                "end": 32
            },
            "flags": 16,
            "start": 26,
            "end": 32
        }
    ],
    "isModule": true,
    "source": "export default function <,>() {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected to find a '>' to match the '<' token here. - start: 25, end: 26
✖ Identifier expected - start: 26, end: 27
✖ Expected a `;` - start: 29, end: 31
✖ Expected a `;` - start: 29, end: 31

```

