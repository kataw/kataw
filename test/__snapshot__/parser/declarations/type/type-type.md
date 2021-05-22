# Kataw parser test case

## Input

`````js
type Foo<T> = Bar<T>
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
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "opaqueType": null,
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 9,
                                "end": 10
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 9,
                            "end": 10
                        },
                        "initializer": null,
                        "flags": 0,
                        "start": 9,
                        "end": 10
                    }
                ],
                "flags": 0,
                "start": 8,
                "end": 11
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "Bar",
                    "rawText": "Bar",
                    "flags": 96,
                    "start": 13,
                    "end": 17
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 18,
                                    "end": 19
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 18,
                                "end": 19
                            },
                            "flags": 0,
                            "start": 18,
                            "end": 19
                        }
                    ],
                    "flags": 0,
                    "start": 17,
                    "end": 20
                },
                "flags": 0,
                "start": 13,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "type Foo<T> = Bar<T>",
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

