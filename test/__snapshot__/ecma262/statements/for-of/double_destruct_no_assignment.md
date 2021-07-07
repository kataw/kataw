# Kataw parser test case

## Input

`````js
for (let {x}, {y} of z);
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
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 11
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 11
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 12
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 8,
                            "end": 12
                        },
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 16
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 17
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 13,
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
                "text": "z",
                "rawText": "z",
                "flags": 96,
                "transformFlags": 0,
                "start": 20,
                "end": 22
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 23,
                "end": 24
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "for (let {x}, {y} of z);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing initializer in destructuring declaration - start: 12, end: 13
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 17, end: 20

```

