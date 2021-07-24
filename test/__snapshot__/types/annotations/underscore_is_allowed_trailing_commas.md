# Kataw parser test case

## Input

`````js
test<
  _,
  _,
  number,
  _,
  _,
>();
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
                            "text": "_",
                            "rawText": "_",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 9
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 0,
                        "end": 9
                    },
                    {
                        "kind": 134299649,
                        "text": "_",
                        "rawText": "_",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 14
                    },
                    {
                        "kind": 134299649,
                        "text": "number",
                        "rawText": "number",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 24
                    },
                    {
                        "kind": 134299649,
                        "text": "_",
                        "rawText": "_",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 29
                    },
                    {
                        "kind": 134299649,
                        "text": "_",
                        "rawText": "_",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 34
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 35
                        },
                        "operatorToken": {
                            "kind": 34883,
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 37
                        },
                        "right": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 37
                        },
                        "flags": 97,
                        "transformFlags": 5120,
                        "start": 35,
                        "end": 39
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "test<\n  _,\n  _,\n  number,\n  _,\n  _,\n>();",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 35, end: 37
✖ ',' expected - start: 39, end: 40
✖ Expression expected - start: 39, end: 40

```

