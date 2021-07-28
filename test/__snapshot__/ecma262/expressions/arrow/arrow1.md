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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
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
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 3
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 3
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 1,
                                "end": 4
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 5
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 13
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 13
                            },
                            "right": null,
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 0,
                            "end": 13
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 14
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 17
                },
                "contents": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 18
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 134217824,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 21
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 21
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 134217824,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 23
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 23
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67191035,
                "text": "##",
                "rawText": "##",
                "flags": 96,
                "transformFlags": 0,
                "start": 23,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 23,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Options",
                "rawText": "Options",
                "flags": 96,
                "transformFlags": 0,
                "start": 26,
                "end": 34
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 26,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67191035,
                "text": "##",
                "rawText": "##",
                "flags": 96,
                "transformFlags": 0,
                "start": 34,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 34,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67191035,
                "text": "# Parser",
                "rawText": "# Parser",
                "flags": 96,
                "transformFlags": 0,
                "start": 38,
                "end": 46
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 38,
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
                            "transformFlags": 0,
                            "start": 46,
                            "end": 54
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 134217824,
                            "transformFlags": 0,
                            "start": 54,
                            "end": 58
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 46,
                        "end": 58
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 134217824,
                        "transformFlags": 0,
                        "start": 58,
                        "end": 60
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 60
                },
                "template": {
                    "kind": 458761,
                    "text": "js\n{ allowTypes : true }",
                    "rawText": "",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 60,
                    "end": 85
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 46,
                "end": 85
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 46,
            "end": 85
        }
    ],
    "isModule": false,
    "source": "({y}?: string) =>x\n````\n## Options\n\n### Parser Options\n\n`````js\n{ allowTypes : true }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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
✖ Private identifiers are not allowed outside class bodies - start: 23, end: 26
✖ '; ' is not allowed here. Did you mean ';'? - start: 26, end: 34
✖ Invalid character - start: 36, end: 37
✖ Private identifiers are not allowed outside class bodies - start: 34, end: 38
✖ Invalid character - start: 38, end: 39
✖ '; ' is not allowed here. Did you mean ';'? - start: 38, end: 46
✖ '; ' is not allowed here. Did you mean ';'? - start: 46, end: 54
✖ Unterminated template literal - start: 60, end: 85

```

