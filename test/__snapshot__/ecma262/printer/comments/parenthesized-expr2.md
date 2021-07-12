# Kataw parser test case

## Input

`````js
    (
      /*1*/

a

      )




 /*2*/
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
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 20
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "    (\n      /*1*/\n\na\n\n      )\n\n\n\n\n /*2*/",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
/*2*/ (/*1*/a);
```

### Diagnostics

```javascript
✔ No errors
```

