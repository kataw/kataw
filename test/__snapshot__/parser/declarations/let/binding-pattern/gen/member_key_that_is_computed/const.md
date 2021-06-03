# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/declarations/let/binding-pattern/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\let\binding-pattern\gen\member_key_that_is_computed
> :: test: member key that is computed
> :: case: const
## Input

`````js
const {[a.b]: c} = v
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
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 8,
                                                    "end": 9
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 10,
                                                    "end": 11
                                                },
                                                "flags": 536870944,
                                                "start": 8,
                                                "end": 11
                                            },
                                            "flags": 32,
                                            "start": 7,
                                            "end": 12
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 7,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 7,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "v",
                            "rawText": "v",
                            "flags": 96,
                            "start": 18,
                            "end": 20
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 20
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 20
            },
            "flags": 33554448,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "const {[a.b]: c} = v",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

const {
  [a.b]: c
} = v;
```

### Diagnostics

```javascript
✔ No errors
```

