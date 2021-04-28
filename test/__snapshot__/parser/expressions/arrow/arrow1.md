# Kataw parser test case

## Input

`````js
({y}?: string) =>x
````
## Options

### Parser Options

`````js
{ allowTypes : true }
`````
`

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 14,
                    "end": 17
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 2,
                                        "end": 3
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 2,
                                "end": 3
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 4
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 768,
                            "start": 4,
                            "end": 5
                        },
                        "consequent": {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 5,
                            "end": 5
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 768,
                            "start": 5,
                            "end": 6
                        },
                        "alternate": {
                            "kind": 134299649,
                            "text": "string",
                            "rawText": "string",
                            "flags": 768,
                            "start": 6,
                            "end": 13
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 13
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 17,
                            "end": 18
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 18,
                            "end": 21
                        },
                        "flags": 256,
                        "start": 17,
                        "end": 21
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 21,
                        "end": 23
                    },
                    "flags": 256,
                    "start": 17,
                    "end": 23
                },
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Options",
                "rawText": "Options",
                "flags": 768,
                "start": 26,
                "end": 34
            },
            "flags": 128,
            "start": 26,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Parser",
                "rawText": "Parser",
                "flags": 768,
                "start": 39,
                "end": 46
            },
            "flags": 128,
            "start": 39,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 134299649,
                            "text": "Options",
                            "rawText": "Options",
                            "flags": 768,
                            "start": 46,
                            "end": 54
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 54,
                            "end": 58
                        },
                        "flags": 256,
                        "start": 46,
                        "end": 58
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 58,
                        "end": 60
                    },
                    "flags": 256,
                    "start": 46,
                    "end": 60
                },
                "template": {
                    "kind": 458761,
                    "text": "js\n{ allowTypes : true }",
                    "rawText": "",
                    "flags": 768,
                    "start": 60,
                    "end": 85
                },
                "flags": 256,
                "start": 46,
                "end": 85
            },
            "flags": 128,
            "start": 46,
            "end": 85
        }
    ],
    "isModule": false,
    "text": "({y}?: string) =>x\n````\n## Options\n\n### Parser Options\n\n`````js\n{ allowTypes : true }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 85
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 5, end: 6
✖ The left hand side of the arrow is not destructible  - start: 14, end: 17
✖ Invalid character - start: 23, end: 25
✖ Private identifiers are not allowed outside class_bodies - start: 23, end: 25
✖ Invalid character - start: 25, end: 26
✖ Private identifiers are not allowed outside class_bodies - start: 25, end: 26
✖ Invalid character - start: 34, end: 37
✖ Private identifiers are not allowed outside class_bodies - start: 34, end: 37
✖ Invalid character - start: 37, end: 38
✖ Private identifiers are not allowed outside class_bodies - start: 37, end: 38
✖ Invalid character - start: 38, end: 39
✖ Private identifiers are not allowed outside class_bodies - start: 38, end: 39
✖ Unterminated template literal - start: 60, end: 85

```

