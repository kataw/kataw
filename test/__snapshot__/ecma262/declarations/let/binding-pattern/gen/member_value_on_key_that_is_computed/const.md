# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/binding-pattern/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/binding-pattern/gen/member_value_on_key_that_is_computed
> :: test: member value on key that is computed
> :: case: const
## Options

`````js
{}
`````
## Input

`````js
const {[a]: b.c} = v
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
                                            "text": "b",
                                            "rawText": "b",
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
                            "end": 13
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 5,
                        "end": 13
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 13
            },
            "flags": 33554448,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 14,
                "end": 15
            },
            "flags": 16,
            "start": 14,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "v",
                "rawText": "v",
                "flags": 96,
                "start": 18,
                "end": 20
            },
            "flags": 16,
            "start": 18,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "const {[a]: b.c} = v",
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
✖ ',' expected - start: 13, end: 14
✖ The parser expected to find a '}' to match the '{' token here - start: 13, end: 14
✖ Missing initializer in const declaration - start: 13, end: 14
✖ ',' expected - start: 13, end: 14
✖ Declaration or statement expected - start: 15, end: 16
✖ Declaration or statement expected - start: 16, end: 18

```

