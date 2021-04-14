# Kataw parser test case

## Input

`````js
type Fn2 = <A, B>(A, B) => A | B;
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "name": {
                "kind": 81921,
                "text": "Fn2",
                "rawText": "Fn2",
                "flags": 768,
                "start": 4,
                "end": 8
            },
            "typeParameters": null,
            "type": {
                "kind": 148,
                "parameters": [
                    {
                        "kind": 149,
                        "ellipsisToken": null,
                        "name": {
                            "kind": 81921,
                            "text": "A",
                            "rawText": "A",
                            "flags": 768,
                            "start": 18,
                            "end": 19
                        },
                        "optionalToken": null,
                        "typeAnnotation": {
                            "kind": 144,
                            "id": {
                                "kind": 16637,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 19,
                                "end": 19
                            },
                            "typeParameters": null,
                            "autofix": 0,
                            "flags": 0,
                            "start": 19,
                            "end": 19
                        },
                        "autofix": 0,
                        "flags": 0,
                        "start": 18,
                        "end": 19
                    },
                    {
                        "kind": 149,
                        "ellipsisToken": null,
                        "name": {
                            "kind": 81921,
                            "text": "B",
                            "rawText": "B",
                            "flags": 768,
                            "start": 20,
                            "end": 22
                        },
                        "optionalToken": null,
                        "typeAnnotation": {
                            "kind": 144,
                            "id": {
                                "kind": 16637,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 22,
                                "end": 22
                            },
                            "typeParameters": null,
                            "autofix": 0,
                            "flags": 0,
                            "start": 22,
                            "end": 22
                        },
                        "autofix": 0,
                        "flags": 0,
                        "start": 20,
                        "end": 22
                    }
                ],
                "returnType": {
                    "kind": 137,
                    "types": [
                        {
                            "kind": 144,
                            "id": {
                                "kind": 81921,
                                "text": "A",
                                "rawText": "A",
                                "flags": 768,
                                "start": 26,
                                "end": 28
                            },
                            "typeParameters": null,
                            "autofix": 0,
                            "flags": 0,
                            "start": 26,
                            "end": 28
                        },
                        {
                            "kind": 144,
                            "id": {
                                "kind": 81921,
                                "text": "B",
                                "rawText": "B",
                                "flags": 768,
                                "start": 30,
                                "end": 32
                            },
                            "typeParameters": null,
                            "autofix": 0,
                            "flags": 0,
                            "start": 30,
                            "end": 32
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 28,
                    "end": 32
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 144,
                            "id": {
                                "kind": 81921,
                                "text": "A",
                                "rawText": "A",
                                "flags": 768,
                                "start": 12,
                                "end": 13
                            },
                            "typeParameters": null,
                            "autofix": 0,
                            "flags": 0,
                            "start": 12,
                            "end": 13
                        },
                        {
                            "kind": 144,
                            "id": {
                                "kind": 81921,
                                "text": "B",
                                "rawText": "B",
                                "flags": 768,
                                "start": 14,
                                "end": 16
                            },
                            "typeParameters": null,
                            "autofix": 0,
                            "flags": 0,
                            "start": 14,
                            "end": 16
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 10,
                    "end": 17
                },
                "autofix": 0,
                "flags": 0,
                "start": 10,
                "end": 32
            },
            "flags": 0,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "type Fn2 = <A, B>(A, B) => A | B;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19,
            "end": 20
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 19,
            "end": 20
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 22,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22,
            "end": 23
        }
    ],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

