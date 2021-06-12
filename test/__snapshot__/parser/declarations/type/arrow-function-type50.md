# Kataw parser test case

## Input

`````js
type a = (a[-1]) => T;
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 16,
                    "end": 19
                },
                "parameters": {
                    "kind": 268,
                    "objectType": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 10,
                            "end": 11
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 8,
                        "end": 11
                    },
                    "indexType": {
                        "kind": 271,
                        "subtractionToken": {
                            "kind": 134318643,
                            "flags": 64,
                            "start": 12,
                            "end": 13
                        },
                        "value": 1,
                        "flags": 64,
                        "start": 12,
                        "end": 14
                    },
                    "flags": 0,
                    "start": 12,
                    "end": 16
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 19,
                        "end": 21
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 19,
                    "end": 21
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "type a = (a[-1]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

