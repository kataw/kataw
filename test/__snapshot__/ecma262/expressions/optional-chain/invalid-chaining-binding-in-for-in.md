# Kataw parser test case

## Input

`````js
for (obj?.foo.bar in {}) ;
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
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 10
                },
                "member": {
                    "kind": 134299649,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 8
                },
                "chain": {
                    "kind": 202,
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 13
                            },
                            "flags": 32,
                            "transformFlags": 2,
                            "start": 10,
                            "end": 13
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 13
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 17
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 13,
                    "end": 17
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 5,
                "end": 17
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 8192,
                "start": 17,
                "end": 20
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 22
                },
                "flags": 48,
                "transformFlags": 8,
                "start": 20,
                "end": 23
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 24,
                "end": 26
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "for (obj?.foo.bar in {}) ;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 20, end: 22

```

