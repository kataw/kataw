# Kataw parser test case

## Input

`````js
const [foo:bar] = obj;
`````

## Options

### Parser Options

`````js
{}
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
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 10
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 7,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 10
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 10
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 5,
                        "end": 10
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 10
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "transformFlags": 0,
                "start": 11,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 11,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "transformFlags": 0,
                "start": 17,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 17,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "const [foo:bar] = obj;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 10, end: 11
✖ Did you forgot a ']' to match the `[` token? - start: 10, end: 11
✖ Missing initializer in const declaration - start: 10, end: 11
✖ ',' expected - start: 10, end: 11
✖ Expected a `;` - start: 14, end: 15
✖ Declaration or statement expected - start: 15, end: 17

```

