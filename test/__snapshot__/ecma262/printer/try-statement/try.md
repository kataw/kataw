# Kataw parser test case

## Input

`````js
try
/* missing comment */
{;}
finally {}

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
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 168,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 28
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 28
                },
                "flags": 17,
                "transformFlags": 0,
                "start": 3,
                "end": 29
            },
            "catchClause": null,
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 65,
                "transformFlags": 0,
                "start": 29,
                "end": 37
            },
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 39
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 37,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "try\n/* missing comment */\n{;}\nfinally {}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

try {
  
} finally {}
```

### Diagnostics

```javascript
✔ No errors
```

