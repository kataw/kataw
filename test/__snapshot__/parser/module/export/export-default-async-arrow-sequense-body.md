# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default async (x) => y, z;

export default async x => y, z;
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 24,
                    "end": 27
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 22,
                        "end": 23
                    }
                ],
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 14,
                    "end": 20
                },
                "returnType": null,
                "contents": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 27,
                            "end": 29
                        },
                        {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 30,
                            "end": 32
                        }
                    ],
                    "flags": 32,
                    "start": 27,
                    "end": 32
                },
                "flags": 288,
                "start": 14,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 32,
            "end": 33
        },
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 33,
                "end": 41
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 80,
                "start": 33,
                "end": 49
            },
            "declaration": {
                "kind": 120,
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 57,
                        "end": 60
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 55,
                        "end": 57
                    },
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 49,
                        "end": 55
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 60,
                                "end": 62
                            },
                            {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 63,
                                "end": 65
                            }
                        ],
                        "flags": 32,
                        "start": 60,
                        "end": 65
                    },
                    "flags": 288,
                    "start": 49,
                    "end": 65
                },
                "flags": 16,
                "start": 49,
                "end": 66
            },
            "flags": 16,
            "start": 33,
            "end": 66
        }
    ],
    "isModule": true,
    "source": "export default async (x) => y, z;\n\nexport default async x => y, z;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 66
}
```

### Printed

```javascript

export default async (x) =>  y, z;
export default async x =>  y, z;;
```

### Diagnostics

```javascript
✔ No errors
```

