# Kataw parser test case

## Input

`````js
do async ()
 => x; while(y)
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 18,
                "end": 18
            },
            "whileKeyword": null,
            "statement": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 1,
                    "start": 11,
                    "end": 15
                },
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 2,
                    "end": 8
                },
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "flags": 288,
                "start": 2,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 18
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 18,
                "end": 24
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 25,
                "end": 26
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 27,
                    "end": 27
                },
                "flags": 16,
                "start": 27,
                "end": 27
            },
            "flags": 16,
            "start": 18,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "do async ()\n => x; while(y)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

do async () =>  x
 ();
while (y) ;
```

### Diagnostics

```javascript
✖ Function declarations are not allowed in an arbitrary statement position. - start: 2, end: 8
✖ Line terminator not permitted before arrow - start: 11, end: 15
✖ Expression expected - start: 18, end: 24
✖ Expression expected - start: 27, end: 27

```

