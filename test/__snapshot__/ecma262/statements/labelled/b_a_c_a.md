# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
bar: foo: ding: foo: x
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 3,
                "end": 4
            },
            "statement": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 8
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 9
                },
                "statement": {
                    "kind": 163,
                    "label": {
                        "kind": 134299649,
                        "text": "ding",
                        "rawText": "ding",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 14
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 15
                    },
                    "statement": {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 19
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 20
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 22
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 22
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 22
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 22
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 4,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": true,
    "source": "bar: foo: ding: foo: x",
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
✖ Duplicate label - start: 15, end: 20

```

