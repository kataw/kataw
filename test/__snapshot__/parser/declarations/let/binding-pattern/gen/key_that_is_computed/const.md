# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/let/binding-pattern/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/let/binding-pattern/gen/key_that_is_computed
> :: test: key that is computed
> :: case: const
## Options

`````js
{}
`````
## Input

`````js
const {[a]: c} = v
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
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
                                                "start": 8,
                                                "end": 9
                                            },
                                            "flags": 32,
                                            "start": 7,
                                            "end": 10
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 7,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 7,
                                "end": 13
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 14
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "v",
                            "rawText": "v",
                            "flags": 96,
                            "start": 16,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 18
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 18
            },
            "flags": 33554448,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "const {[a]: c} = v",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

const {
  [a]: c
} = v;
```

### Diagnostics

```javascript
✔ No errors
```

