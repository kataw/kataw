# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/let/binding-pattern/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/let/binding-pattern/gen/member_key_that_is_computed
> :: test: member key that is computed
> :: case: const
## Options

`````js
{}
`````
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
                "transformFlags": 0,
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
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 8,
                                                    "end": 9
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 10,
                                                    "end": 11
                                                },
                                                "flags": 96,
                                                "transformFlags": 2,
                                                "start": 8,
                                                "end": 11
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 12
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 7,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 15
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 16
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "v",
                            "rawText": "v",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 20
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 20
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 20
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "const {[a.b]: c} = v",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
const { [a.b]: c } = v;
```

### Diagnostics

```javascript
✔ No errors
```

