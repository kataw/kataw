# Kataw parser test case

## Input

`````js
test<number, _, string, _, _, _, Foo, Bar, Baz>();
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "test",
                            "rawText": "test",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 4
                        },
                        "operatorToken": {
                            "kind": 536971330,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 5
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "number",
                            "rawText": "number",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 11
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 0,
                        "end": 11
                    },
                    {
                        "kind": 134299649,
                        "text": "_",
                        "rawText": "_",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 14
                    },
                    {
                        "kind": 134299649,
                        "text": "string",
                        "rawText": "string",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 22
                    },
                    {
                        "kind": 134299649,
                        "text": "_",
                        "rawText": "_",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 25
                    },
                    {
                        "kind": 134299649,
                        "text": "_",
                        "rawText": "_",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 28
                    },
                    {
                        "kind": 134299649,
                        "text": "_",
                        "rawText": "_",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 31
                    },
                    {
                        "kind": 134299649,
                        "text": "Foo",
                        "rawText": "Foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 36
                    },
                    {
                        "kind": 134299649,
                        "text": "Bar",
                        "rawText": "Bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 41
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "Baz",
                            "rawText": "Baz",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 46
                        },
                        "operatorToken": {
                            "kind": 34883,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 47
                        },
                        "right": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 47
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 42,
                        "end": 49
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 49
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "test<number, _, string, _, _, _, Foo, Bar, Baz>();",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 49, end: 50
✖ Expression expected - start: 49, end: 50

```

