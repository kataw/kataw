# Kataw parser test case

## Input

`````js
 {if (false) {} else ;}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 164,
                        "ifKeyword": {
                            "kind": 37757019,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 4
                        },
                        "expression": {
                            "kind": 205586437,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 11
                        },
                        "consequent": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 15
                        },
                        "elseKeyword": {
                            "kind": 4194389,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 20
                        },
                        "alternate": {
                            "kind": 168,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 22
                        },
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 22
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 2,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": " {if (false) {} else ;}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

{
  if (false ) {}
  else ;
}
```

### Diagnostics

```javascript
✔ No errors
```

