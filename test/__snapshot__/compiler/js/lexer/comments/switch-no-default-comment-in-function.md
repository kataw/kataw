# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true }
`````

## Input

`````js
function bar(a) {
    switch (a) {
        case 2:
            break;
        case 1:
            break;
        //no default
    }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function bar(a) {\n    switch (a) {\n        case 2:\n            break;\n        case 1:\n            break;\n        //no default\n    }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "bar",
                "rawText": "bar",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 12
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 13,
                            "end": 14
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 13,
                        "end": 14
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 15
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097362,
                            "expression": {
                                "kind": 196712,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 31
                            },
                            "caseBlock": {
                                "kind": 2093,
                                "clauses": [
                                    {
                                        "kind": 46,
                                        "expression": {
                                            "kind": 4261540,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 47,
                                            "end": 49
                                        },
                                        "statements": [
                                            {
                                                "kind": 2097193,
                                                "label": null,
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 50,
                                                "end": 69
                                            }
                                        ],
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 69
                                    },
                                    {
                                        "kind": 46,
                                        "expression": {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 82,
                                            "end": 84
                                        },
                                        "statements": [
                                            {
                                                "kind": 2097193,
                                                "label": null,
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 85,
                                                "end": 104
                                            }
                                        ],
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 69,
                                        "end": 104
                                    }
                                ],
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 131
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 131
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 131
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 133
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 133
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 133
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

