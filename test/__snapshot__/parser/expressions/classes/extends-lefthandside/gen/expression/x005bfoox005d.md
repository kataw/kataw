# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: [foo]
## Input

`````js
(class B extends [foo] {})
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37814352,
                        "flags": 768,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 81921,
                        "text": "B",
                        "rawText": "B",
                        "flags": 768,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsToken": {
                            "kind": 4194391,
                            "flags": 768,
                            "start": 8,
                            "end": 16
                        },
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 81921,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 768,
                                        "start": 18,
                                        "end": 21
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 18,
                                "end": 21
                            },
                            "flags": 256,
                            "start": 16,
                            "end": 22
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 16,
                        "end": 22
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 24,
                        "end": 25
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 25
                },
                "flags": 256,
                "start": 0,
                "end": 26
            },
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "(class B extends [foo] {})",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: [foo]
## Input

`````js
(class B extends [foo] {})
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: [foo]
## Input

`````js
(class B extends [foo] {})
`````
```

