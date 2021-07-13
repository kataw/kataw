# Kataw parser test case

## Input

`````js
(


  /*1*/


  a/*2*/,/*3*/b/*4*/,/*5*/




c/*6*/)


// 7

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
                            "end": 17
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 29
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 46
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 52
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 52
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "(\n\n\n  /*1*/\n\n\n  a/*2*/,/*3*/b/*4*/,/*5*/\n\n\n\n\nc/*6*/)\n\n\n// 7\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
(/*1*/ a /*2*/, /*3*/ b /*4*/, /*5*/ c /*6*/// 7
);
```

### Diagnostics

```javascript
✔ No errors
```

