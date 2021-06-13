# Kataw parser test case

## Input

`````js
type F = $Call<Fn1, number, string>;
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
                "text": "F",
                "rawText": "F",
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
                        {
                            "kind": 310,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "start": 19,
                                "end": 26
                            },
                            "flags": 2097152,
                            "start": 19,
                            "end": 26
                        },
                        {
                            "kind": 310,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "start": 27,
                                "end": 34
                            },
                            "flags": 2097152,
                            "start": 27,
                            "end": 34
                        }
                    ],
                    "flags": 2097152,
                    "start": 14,
                    "end": 35
                },
                "flags": 2097152,
                "start": 8,
                "end": 35
            },
            "flags": 2097152,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "type F = $Call<Fn1, number, string>;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

