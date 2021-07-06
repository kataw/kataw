# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
a &&= b;
obj.a &&= b;
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4139,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 5
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 7
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 12
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 14
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 8,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 4139,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 18
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 20
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 8,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 8,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "a &&= b;\nobj.a &&= b;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

a &&= b;
obj.a &&= b;

```

### Diagnostics

```javascript
✔ No errors
```

