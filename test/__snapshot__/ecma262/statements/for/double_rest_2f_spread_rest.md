# Kataw parser test case

## Input

`````js
for (let [... ...foo] = obj);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 8
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
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 10,
                                                "end": 13
                                            },
                                            "left": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 13
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": null,
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 10,
                                            "end": 13
                                        },
                                        {
                                            "kind": 281,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 17
                                            },
                                            "left": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 17,
                                                "end": 20
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": null,
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 13,
                                            "end": 20
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 20
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 21
                            },
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "obj",
                                "rawText": "obj",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 27
                            },
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 8,
                            "end": 27
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 27
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 0,
                "end": 27
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 27,
                "end": 27
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 28,
                "end": 29
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "for (let [... ...foo] = obj);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 13, end: 17
✖ ',' expected - start: 13, end: 17
✖ ',' expected - start: 27, end: 28
✖ Identifier expected - start: 27, end: 28

```

