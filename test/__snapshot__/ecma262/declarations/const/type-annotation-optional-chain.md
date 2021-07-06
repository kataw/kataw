# Kataw parser test case

## Input

`````js
const a: any | null = 1337;
const b: string | null = a?.a;
const c: ?any = 1337;
const d: string | null = c?.c;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 7
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 134234252,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 12
                                    },
                                    {
                                        "kind": 138477575,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 19
                                    }
                                ],
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 19
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 19
                        },
                        "initializer": {
                            "kind": 201392130,
                            "text": 1337,
                            "rawText": "1337",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 26
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 5,
                        "end": 26
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 26
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 27,
                "end": 33
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 35
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 43
                                    },
                                    {
                                        "kind": 138477575,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 45,
                                        "end": 50
                                    }
                                ],
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 50
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 50
                        },
                        "initializer": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 54,
                                "end": 56
                            },
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 52,
                                "end": 54
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 202,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 56,
                                        "end": 57
                                    },
                                    "flags": 536870944,
                                    "transformFlags": 2,
                                    "start": 56,
                                    "end": 57
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 56,
                                "end": 57
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 57
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 33,
                        "end": 57
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 33,
                "end": 57
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 27,
            "end": 58
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 58,
                "end": 64
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 64,
                            "end": 66
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 67,
                                    "end": 69
                                },
                                "type": {
                                    "kind": 134234252,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 69,
                                    "end": 72
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 67,
                                "end": 72
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 72
                        },
                        "initializer": {
                            "kind": 201392130,
                            "text": 1337,
                            "rawText": "1337",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 74,
                            "end": 79
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 64,
                        "end": 79
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 64,
                "end": 79
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 58,
            "end": 80
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 80,
                "end": 86
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 86,
                            "end": 88
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 89,
                                        "end": 96
                                    },
                                    {
                                        "kind": 138477575,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 98,
                                        "end": 103
                                    }
                                ],
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 96,
                                "end": 103
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 89,
                            "end": 103
                        },
                        "initializer": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 107,
                                "end": 109
                            },
                            "member": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 105,
                                "end": 107
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 202,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 109,
                                        "end": 110
                                    },
                                    "flags": 536870944,
                                    "transformFlags": 2,
                                    "start": 109,
                                    "end": 110
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 109,
                                "end": 110
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 105,
                            "end": 110
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 86,
                        "end": 110
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 86,
                "end": 110
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 80,
            "end": 111
        }
    ],
    "isModule": false,
    "source": "const a: any | null = 1337;\nconst b: string | null = a?.a;\nconst c: ?any = 1337;\nconst d: string | null = c?.c;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 111
}
```

### Printed

```javascript
const a: any | null = 1337;
const b: string | null = a?.a;

const c: ? any = 1337;

const d: string | null = c?.c;

```

### Diagnostics

```javascript
✔ No errors
```

