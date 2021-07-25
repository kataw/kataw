# Kataw parser test case

## Input

`````js
(
  /*1*/

  a

  /*2*/,/*3*/



  b/*4*/,/*5*/c/*6*/)
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
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 14
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 36
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 48
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 54
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 54
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "(\n  /*1*/\n\n  a\n\n  /*2*/,/*3*/\n\n\n\n  b/*4*/,/*5*/c/*6*/)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
(/*1*/ a, /*3*/ b /*4*/, /*5*/ c /*6*/);
```

### Diagnostics

```javascript
✔ No errors
```

