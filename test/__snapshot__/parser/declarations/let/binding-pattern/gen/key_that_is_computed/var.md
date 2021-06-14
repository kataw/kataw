# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/let/binding-pattern/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/let/binding-pattern/gen/key_that_is_computed
> :: test: key that is computed
> :: case: var
## Options

`````js
{}
`````
## Input

`````js
var {[a]: c} = v
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 6,
                                                "end": 7
                                            },
                                            "flags": 32,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 5,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 11
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "v",
                            "rawText": "v",
                            "flags": 96,
                            "start": 14,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 16
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "var {[a]: c} = v",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

var {
  [a]: c
} = v;
```

### Diagnostics

```javascript
✔ No errors
```

