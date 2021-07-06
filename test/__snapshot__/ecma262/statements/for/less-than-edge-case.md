# Kataw parser test case

## Input

`````js
for (let i = 0; i < require('foo').bar; i++) {
    x(i);
}
`````

## Options

### Parser Options

`````js
{ next: true, allowTypes : true }
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
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 10
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 14
                            },
                            "flags": 16,
                            "transformFlags": 128,
                            "start": 8,
                            "end": 14
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 14
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "condition": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 43
                },
                "operand": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 41
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 39,
                "end": 43
            },
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 19
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "require",
                            "rawText": "require",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 27
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "'foo'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 33
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 33
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 19,
                        "end": 34
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 38
                    },
                    "flags": 268435488,
                    "transformFlags": 2,
                    "start": 19,
                    "end": 38
                },
                "flags": 96,
                "transformFlags": 1024,
                "start": 15,
                "end": 38
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
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 46,
                                    "end": 52
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "i",
                                            "rawText": "i",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 53,
                                            "end": 54
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 54
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 46,
                                "end": 55
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 56
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 56
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 44,
                "end": 58
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "for (let i = 0; i < require('foo').bar; i++) {\n    x(i);\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

for (let i = 0; i++ ; i  < require('\'foo\'').bar)
  {
    x(
      i
    );
  }
```

### Diagnostics

```javascript
✔ No errors
```

