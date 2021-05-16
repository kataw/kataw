# Kataw parser test case

## Input

`````js
({const}) => x;

({debugger}) => x;
`````

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
                    "flags": 0,
                    "start": 9,
                    "end": 12
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "const",
                                    "rawText": "const",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 7
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 7
                        },
                        "flags": 48,
                        "start": 1,
                        "end": 8
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 12,
                    "end": 14
                },
                "flags": 34,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 29,
                    "end": 32
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "debugger",
                                    "rawText": "debugger",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 27
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 19,
                            "end": 27
                        },
                        "flags": 48,
                        "start": 18,
                        "end": 28
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 32,
                    "end": 34
                },
                "flags": 34,
                "start": 15,
                "end": 34
            },
            "flags": 16,
            "start": 15,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "({const}) => x;\n\n({debugger}) => x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 7, end: 8
✖ Property definition expected. Did you mean to use a ':'? - start: 27, end: 28

```

