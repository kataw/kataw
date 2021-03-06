# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
//foo
var zzz /*aaa*/ = 777;
//bar
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "//foo\nvar zzz /*aaa*/ = 777;\n//bar",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "zzz",
                                "rawText": "zzz",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 9,
                                "end": 13
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 4261540,
                                "text": 777,
                                "rawText": "777",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 27
                            },
                            "flags": 9,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 27
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 27
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 28
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 28
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

