# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true }
`````

## Input

`````js
#!/*
these characters should not be considered within a comment
*/
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "#!/*\nthese characters should not be considered within a comment\n*/",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "these",
                    "rawText": "these",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 10
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 4,
                "end": 10
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "characters",
                    "rawText": "characters",
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 21
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 21
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "should",
                    "rawText": "should",
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 28
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 21,
                "end": 28
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "not",
                    "rawText": "not",
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 32
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 28,
                "end": 32
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "be",
                    "rawText": "be",
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 35
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 32,
                "end": 35
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "considered",
                    "rawText": "considered",
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 46
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 35,
                "end": 46
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "within",
                    "rawText": "within",
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 53
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 46,
                "end": 53
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "a",
                    "rawText": "a",
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 55
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 53,
                "end": 55
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "comment",
                        "rawText": "comment",
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 55,
                        "end": 63
                    },
                    "operator": "*",
                    "right": {
                        "kind": 4260544,
                        "text": "/",
                        "flags": 524288,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 65,
                        "end": 67
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 55,
                    "end": 67
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 55,
                "end": 67
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 4,
        "end": 67
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 11,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 29,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 33,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 36,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 47,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 54,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 56,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 67,
            "length": 1
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 66
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
