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

### CST

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
                    "flags": 64,
                    "start": 14,
                    "end": 17
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 3
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 2,
                                "end": 3
                            },
                            "flags": 48,
                            "start": 1,
                            "end": 4
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 4,
                            "end": 5
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 6,
                                "end": 13
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 13
                        },
                        "right": null,
                        "flags": 32,
                        "start": 0,
                        "end": 13
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 17,
                            "end": 18
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 134217824,
                            "start": 18,
                            "end": 21
                        },
                        "flags": 32,
                        "start": 17,
                        "end": 21
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 134217824,
                        "start": 21,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 17,
                    "end": 23
                },
                "flags": 34,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174651,
                "text": "#",
                "flags": 96,
                "start": 23,
                "end": 25
            },
            "flags": 16,
            "start": 23,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174651,
                "text": "#",
                "flags": 96,
                "start": 25,
                "end": 26
            },
            "flags": 16,
            "start": 25,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Options",
                "rawText": "Options",
                "flags": 96,
                "start": 26,
                "end": 34
            },
            "flags": 16,
            "start": 26,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174651,
                "text": "#",
                "flags": 96,
                "start": 34,
                "end": 37
            },
            "flags": 16,
            "start": 34,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174651,
                "text": "#",
                "flags": 96,
                "start": 37,
                "end": 38
            },
            "flags": 16,
            "start": 37,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174651,
                "text": "#",
                "flags": 96,
                "start": 38,
                "end": 39
            },
            "flags": 16,
            "start": 38,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Parser",
                "rawText": "Parser",
                "flags": 96,
                "start": 39,
                "end": 46
            },
            "flags": 16,
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
                            "flags": 96,
                            "start": 46,
                            "end": 54
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 134217824,
                            "start": 54,
                            "end": 58
                        },
                        "flags": 32,
                        "start": 46,
                        "end": 58
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 134217824,
                        "start": 58,
                        "end": 60
                    },
                    "flags": 32,
                    "start": 46,
                    "end": 60
                },
                "template": {
                    "kind": 458761,
                    "text": "js\n{ allowTypes : true }",
                    "rawText": "",
                    "flags": 134217824,
                    "start": 60,
                    "end": 85
                },
                "flags": 32,
                "start": 46,
                "end": 85
            },
            "flags": 16,
            "start": 46,
            "end": 85
        }
    ],
    "isModule": false,
    "source": "({y}?: string) =>x\n````\n## Options\n\n### Parser Options\n\n`````js\n{ allowTypes : true }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 85
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid character - start: 24, end: 25
✖ Private identifiers are not allowed outside class bodies - start: 23, end: 25
✖ Invalid character - start: 25, end: 26
✖ Expected a `;` - start: 25, end: 26
✖ Expected a `;` - start: 26, end: 34
✖ Invalid character - start: 36, end: 37
✖ Private identifiers are not allowed outside class bodies - start: 34, end: 37
✖ Invalid character - start: 37, end: 38
✖ Expected a `;` - start: 37, end: 38
✖ Invalid character - start: 38, end: 39
✖ Expected a `;` - start: 38, end: 39
✖ Expected a `;` - start: 39, end: 46
✖ Expected a `;` - start: 46, end: 54
✖ Unterminated template literal - start: 60, end: 85

```

