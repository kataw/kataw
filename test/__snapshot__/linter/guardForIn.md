# Kataw parser test case

## Input

`````js
for (key in foo) {
    doSomething(key);
}
`````

## Options

### Parser Options

`````js
{ lint: { guardForIn: true } }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "text": "key",
                "rawText": "key",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 8
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 0,
                "start": 8,
                "end": 11
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 11,
                "end": 15
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "doSomething",
                                    "rawText": "doSomething",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 34
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "key",
                                            "rawText": "key",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 38
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 38
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 18,
                                "end": 39
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 18,
                            "end": 40
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 40
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 16,
                "end": 42
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "for (key in foo) {\n    doSomething(key);\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
for (key in foo) {
    doSomething(key);
  }
```

### Diagnostics

```javascript
✔ No errors
```

