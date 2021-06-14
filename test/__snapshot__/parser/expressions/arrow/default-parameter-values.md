# Kataw parser test case

## Input

`````js
(x: number = 0) => 0;

(x, y: number = 0) => 0;
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
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 15,
                    "end": 18
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "start": 3,
                                "end": 10
                            },
                            "flags": 2097152,
                            "start": 2,
                            "end": 10
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 14
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 18,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 41,
                    "end": 44
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 24,
                        "end": 25
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 26,
                            "end": 28
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "start": 29,
                                "end": 36
                            },
                            "flags": 2097152,
                            "start": 28,
                            "end": 36
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 38,
                            "end": 40
                        },
                        "flags": 32,
                        "start": 21,
                        "end": 40
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 44,
                    "end": 46
                },
                "flags": 32,
                "start": 21,
                "end": 46
            },
            "flags": 16,
            "start": 21,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "(x: number = 0) => 0;\n\n(x, y: number = 0) => 0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

(x = 0) =>  0;
(x, y = 0) =>  0;
```

### Diagnostics

```javascript
✔ No errors
```

