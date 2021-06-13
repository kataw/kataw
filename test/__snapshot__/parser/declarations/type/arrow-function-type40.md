# Kataw parser test case

## Input

`````js
type a = (...x: string & foo | bar) => T;
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
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 288,
                "arrowTypeParameterList": {
                    "kind": 292,
                    "parameters": [
                        {
                            "kind": 149,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 10,
                                "end": 13
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
                                "end": 14
                            },
                            "optionalToken": null,
                            "types": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 138,
                                        "types": [
                                            {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 15,
                                                "end": 22
                                            },
                                            {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 24,
                                                    "end": 28
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 24,
                                                "end": 28
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 22,
                                        "end": 28
                                    },
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "start": 30,
                                            "end": 34
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 30,
                                        "end": 34
                                    }
                                ],
                                "flags": 2097152,
                                "start": 28,
                                "end": 34
                            },
                            "flags": 2097152,
                            "start": 10,
                            "end": 34
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 10,
                    "end": 34
                },
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 35,
                    "end": 38
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 38,
                        "end": 40
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 38,
                    "end": 40
                },
                "typeParameters": null,
                "flags": 2097152,
                "start": 8,
                "end": 40
            },
            "flags": 2097152,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "type a = (...x: string & foo | bar) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

