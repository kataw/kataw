# Kataw parser test case

## Input

`````js
type D = $Call<Fn1>;
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
                "text": "D",
                "rawText": "D",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "$Call",
                        "rawText": "$Call",
                        "flags": 96,
                        "start": 8,
                        "end": 14
                    },
                    "typeParameters": {
                        "kind": 309,
                        "parameters": [
                            {
                                "kind": 310,
                                "type": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "Fn1",
                                            "rawText": "Fn1",
                                            "flags": 96,
                                            "start": 15,
                                            "end": 18
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 15,
                                        "end": 18
                                    },
                                    "flags": 2097152,
                                    "start": 15,
                                    "end": 18
                                },
                                "flags": 2097152,
                                "start": 15,
                                "end": 18
                            }
                        ],
                        "flags": 2097152,
                        "start": 14,
                        "end": 19
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 19
                },
                "flags": 2097152,
                "start": 8,
                "end": 19
            },
            "flags": 2097152,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "type D = $Call<Fn1>;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

