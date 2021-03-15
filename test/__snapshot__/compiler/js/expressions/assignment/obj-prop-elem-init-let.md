# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
  0, { x: x = y } = {};
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "  0, { x: x = y } = {};",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65590,
                    "expressions": [
                        {
                            "kind": 4261540,
                            "text": 0,
                            "rawText": "0",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 3
                        },
                        {
                            "kind": 65550,
                            "left": {
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 196711,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 6,
                                                "end": 8
                                            },
                                            "right": {
                                                "kind": 65550,
                                                "left": {
                                                    "kind": 196712,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 9,
                                                    "end": 11
                                                },
                                                "operator": "=",
                                                "right": {
                                                    "kind": 196712,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 13,
                                                    "end": 15
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 9,
                                                "end": 15
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 15
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 15
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 17
                            },
                            "operator": "=",
                            "right": {
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 21
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 22
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 22
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 22
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 23
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 23
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

