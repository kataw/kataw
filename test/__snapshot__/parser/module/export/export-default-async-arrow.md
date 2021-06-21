# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default async x => (y, z);
export default async (x) => (y, z);

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
                "kind": 120,
                "expression": {
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 14,
                        "end": 20
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 20,
                        "end": 22
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 22,
                        "end": 25
                    },
                    "contents": {
                        "kind": 121,
                        "expression": {
                            "kind": 132,
                            "expressions": [
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 27,
                                    "end": 28
                                },
                                {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 29,
                                    "end": 31
                                }
                            ],
                            "flags": 32,
                            "start": 25,
                            "end": 32
                        },
                        "flags": 32,
                        "start": 25,
                        "end": 32
                    },
                    "flags": 288,
                    "start": 14,
                    "end": 32
                },
                "flags": 16,
                "start": 14,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        },
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 33,
                "end": 40
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 80,
                "start": 33,
                "end": 48
            },
            "declaration": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 48,
                    "end": 54
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 56,
                        "end": 57
                    }
                ],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 58,
                    "end": 61
                },
                "contents": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 63,
                                "end": 64
                            },
                            {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 65,
                                "end": 67
                            }
                        ],
                        "flags": 32,
                        "start": 61,
                        "end": 68
                    },
                    "flags": 32,
                    "start": 61,
                    "end": 68
                },
                "flags": 288,
                "start": 48,
                "end": 68
            },
            "flags": 16,
            "start": 33,
            "end": 68
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 68,
            "end": 69
        }
    ],
    "isModule": true,
    "source": "export default async x => (y, z);\nexport default async (x) => (y, z);\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript

 , , ; 
```

### Diagnostics

```javascript
✔ No errors
```

