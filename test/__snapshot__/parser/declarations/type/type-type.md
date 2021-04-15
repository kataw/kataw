# Kataw parser test case

## Input

`````js
type Foo<T> = Bar<T>
`````

## Options

### Parser Options

`````js
{}
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
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 768,
                "start": 4,
                "end": 8
            },
            "opaqueType": null,
            "typeParameters": {
                "kind": 146,
                "types": [
                    {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 768,
                            "start": 9,
                            "end": 10
                        },
                        "typeParameters": null,
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
                    "flags": 768,
                    "start": 13,
                    "end": 17
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 768,
                                "start": 18,
                                "end": 19
                            },
                            "typeParameters": null,
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
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "type Foo<T> = Bar<T>",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

