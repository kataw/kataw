# Kataw parser test case

## Input

`````js
for (let [...foo] of obj);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
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
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 16
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": null,
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 10,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 16
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 17
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 8,
                            "end": 17
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 17
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 17,
                "end": 20
            },
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "transformFlags": 0,
                "start": 20,
                "end": 24
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 25,
                "end": 26
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "for (let [...foo] of obj);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
for (let [...foo] of obj);
```

### Diagnostics

```javascript
✔ No errors
```

