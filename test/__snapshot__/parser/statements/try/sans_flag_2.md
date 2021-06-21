# Kataw parser test case

## Input

`````js
try {} catch (e) {}
/foo/g
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 3,
                "end": 6
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 6,
                    "end": 12
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 14,
                    "end": 15
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 18,
                        "end": 18
                    },
                    "flags": 16,
                    "start": 16,
                    "end": 19
                },
                "flags": 80,
                "start": 6,
                "end": 19
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/foo/g",
                "flags": 96,
                "start": 19,
                "end": 26
            },
            "flags": 16,
            "start": 19,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "try {} catch (e) {}\n/foo/g",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

 try {  }
catch (e){  } ; 
```

### Diagnostics

```javascript
✔ No errors
```

