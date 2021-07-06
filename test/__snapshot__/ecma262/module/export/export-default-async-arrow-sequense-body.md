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
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "declaration": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 20
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 23
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 24
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 27
                },
                "contents": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 29
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 14,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 96,
                "transformFlags": 0,
                "start": 30,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 30,
            "end": 33
        },
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "transformFlags": 0,
                "start": 33,
                "end": 41
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 80,
                "transformFlags": 0,
                "start": 33,
                "end": 49
            },
            "declaration": {
                "kind": 120,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 55
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 57
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 57,
                                "end": 60
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 60,
                                "end": 62
                            },
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 62
                        },
                        {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 63,
                            "end": 65
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 49,
                    "end": 65
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 49,
                "end": 66
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 33,
            "end": 66
        }
    ],
    "isModule": true,
    "source": "export default async (x) => y, z;\n\nexport default async x => y, z;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 66
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 29, end: 30

```

