# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
({a} &&= b)

({a} ||= b)

({a} ??= b)
`````

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
                "kind": 131,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
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
                                "flags": 32,
                                "start": 1,
                                "end": 4
                            },
                            "operatorToken": {
                                "kind": 4139,
                                "flags": 64,
                                "start": 4,
                                "end": 8
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 8,
                                "end": 10
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 10
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 11
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 15,
                                                "end": 16
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 15,
                                        "end": 16
                                    },
                                    "flags": 32,
                                    "start": 14,
                                    "end": 17
                                },
                                "operatorToken": {
                                    "kind": 4138,
                                    "flags": 64,
                                    "start": 17,
                                    "end": 21
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 21,
                                    "end": 23
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 23
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 14,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 24
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 28,
                                            "end": 29
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 28,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 27,
                                "end": 30
                            },
                            "operatorToken": {
                                "kind": 4140,
                                "flags": 64,
                                "start": 30,
                                "end": 34
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 34,
                                "end": 36
                            },
                            "flags": 32,
                            "start": 27,
                            "end": 36
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 27,
                    "end": 36
                },
                "flags": 32,
                "start": 0,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "text": "({a} &&= b)\n\n({a} ||= b)\n\n({a} ??= b)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 4, end: 8
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 17, end: 21
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 30, end: 34

```

