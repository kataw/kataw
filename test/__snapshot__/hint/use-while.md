# Kataw parser test case

## Input

`````js
for (; x.running;) {
	x.step();
}

for (;;) {
	doSomething();
}
`````

## Options

### Parser Options

`````js
{ allowTypes: true, hint: true }
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
            "initializer": null,
            "condition": null,
            "incrementor": {
                "kind": 129,
                "member": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "expression": {
                    "kind": 134299649,
                    "text": "running",
                    "rawText": "running",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 16
                },
                "flags": 96,
                "transformFlags": 2,
                "start": 6,
                "end": 16
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
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 23
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "step",
                                        "rawText": "step",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 28
                                    },
                                    "flags": 97,
                                    "transformFlags": 2,
                                    "start": 20,
                                    "end": 28
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 20,
                                "end": 30
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 20,
                            "end": 31
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 31
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 18,
                "end": 33
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 33
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 33,
                "end": 38
            },
            "initializer": null,
            "condition": null,
            "incrementor": null,
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
                                    "start": 45,
                                    "end": 58
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 59,
                                    "end": 59
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 45,
                                "end": 60
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 45,
                            "end": 61
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 61
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 43,
                "end": 63
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 33,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "for (; x.running;) {\n\tx.step();\n}\n\nfor (;;) {\n\tdoSomething();\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Use 'while' loops instead of 'for' loops. - start: 33, end: 42

```

